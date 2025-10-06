import { Box, Pagination, TextField, Typography } from "@mui/material";
import type { JSX } from "react";
import { useMemo, useState } from "react";
import SearchDisplay from "../../components/search_display/search_display";
import type { RouteOptions } from "../../utils/route/i_route";

const SearchBody = (options: RouteOptions): JSX.Element => {
  const data = options.data;
  const [us_currentPage, us_setCurrentPage] = useState(1);
  const [us_query, us_setQuery] = useState<string>("");
  const itemsPerPage = 12;

  const um_paginatedData = useMemo(() => {
    if (!data) return [];

    const startIndex = (us_currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  }, [data, us_currentPage, itemsPerPage, us_query]);

  const totalPages = useMemo(() => {
    if (!data) return 0;
    return Math.ceil(data.length / itemsPerPage);
  }, [data, itemsPerPage]);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    us_setCurrentPage(page);
  };

  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    us_setQuery(event.target.value);
  };

  //TODO: wrap body in a scrollable view
  return data ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          width: "100%",
        }}
      >
        <h5>Search for:</h5>
        {/* <RadioGroup></RadioGroup> */}
        <TextField onChange={handleSearchQueryChange} sx={{ width: "90%" }} />
      </Box>
      <Typography variant="h6" sx={{ marginBottom: "20px" }}>
        Showing {um_paginatedData.length} of {data.length} results
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "20px",
          justifyContent: "center",
        }}
      >
        {um_paginatedData
          .filter(
            (entry) =>
              entry.name.toLowerCase().includes(us_query.toLowerCase()) ||
              entry.set_number.includes(us_query)
          )
          .map((entry) => {
            return <SearchDisplay key={entry.set_number} setDetails={entry} />;
          })}
      </Box>

      {totalPages > 1 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Pagination
            count={totalPages}
            page={us_currentPage}
            onChange={handlePageChange}
            color="primary"
            size="large"
            showFirstButton
            showLastButton
          />
        </Box>
      )}
    </Box>
  ) : (
    <></>
  );
};

export default SearchBody;
