import { Box, Card, Chip, Typography } from "@mui/material";
import type { JSX } from "react";
import { Link } from "react-router";
import type { SearchDisplayProps } from "./i_search_display";

const SearchDisplay = ({ setDetails }: SearchDisplayProps): JSX.Element => {
  return (
    <Link to={`/details/${setDetails.id}`}>
      <Card
        sx={{
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          width: "230px",
          height: "270px",
          display: "flex",
          flexDirection: "column",
          padding: "16px",
          backgroundColor: "#fff",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          transition: "box-shadow 0.2s ease-in-out",
          "&:hover": {
            boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
            cursor: "pointer",
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            marginBottom: "8px",
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          {setDetails.set_number}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontSize: "12px",
            marginBottom: "12px",
            textAlign: "center",
            lineHeight: 1.3,
            height: "32px",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {setDetails.name}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            marginBottom: "12px",
          }}
        >
          <img
            src={setDetails.image_url}
            alt={setDetails.name}
            style={{
              width: "120px",
              height: "120px",
              objectFit: "contain",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <Typography variant="caption" color="text.secondary">
            {setDetails.pieces} pieces
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {setDetails.num_minifigs} minifigs
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="caption" color="text.secondary">
            {setDetails.release_year}
          </Typography>
          <Chip
            label={setDetails.retired ? "Retired" : "Available"}
            size="small"
            color={setDetails.retired ? "default" : "success"}
            variant="outlined"
          />
        </Box>
      </Card>
    </Link>
  );
};

export default SearchDisplay;
