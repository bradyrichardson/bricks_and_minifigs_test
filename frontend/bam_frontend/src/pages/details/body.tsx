import { Box } from "@mui/material";
import type { JSX } from "react";
import { useParams } from "react-router";
import type { RouteOptions } from "../../utils/route/i_route";

const DetailsBody = (options: RouteOptions): JSX.Element => {
  const data = options.data;
  const params = useParams();

  const setDetails = data?.find((set) => {
    return set.id === params.id;
  });

  return setDetails ? (
    <Box
      sx={{
        display: "flex",
        gap: 6,
        alignItems: "flex-start",
        padding: 3,
        paddingTop: "160px",
      }}
    >
      {/* image section */}
      <Box sx={{ flex: 1, maxWidth: "50%" }}>
        <img
          src={setDetails.image_url}
          alt={setDetails.name}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          }}
        />
      </Box>

      {/* details section */}
      <Box sx={{ flex: 1, maxWidth: "50%", paddingLeft: 2 }}>
        <h2
          style={{
            marginTop: 0,
            marginBottom: "2rem",
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#1976d2",
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          {setDetails.name}
        </h2>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            backgroundColor: "#f8f9fa",
            padding: 3,
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "12px 16px",
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            <strong style={{ color: "#1976d2", minWidth: "140px" }}>
              Set Number:
            </strong>
            <span style={{ fontSize: "1.1rem", fontWeight: "500" }}>
              {setDetails.set_number}
            </span>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "12px 16px",
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            <strong style={{ color: "#1976d2", minWidth: "140px" }}>
              Pieces:
            </strong>
            <span style={{ fontSize: "1.1rem", fontWeight: "500" }}>
              {setDetails.pieces.toLocaleString()}
            </span>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "12px 16px",
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            <strong style={{ color: "#1976d2", minWidth: "140px" }}>
              Minifigures:
            </strong>
            <span style={{ fontSize: "1.1rem", fontWeight: "500" }}>
              {setDetails.num_minifigs}
            </span>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "12px 16px",
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            <strong style={{ color: "#1976d2", minWidth: "140px" }}>
              Status:
            </strong>
            <span
              style={{
                fontSize: "1.1rem",
                fontWeight: "500",
                color: setDetails.retired ? "#d32f2f" : "#2e7d32",
                backgroundColor: setDetails.retired ? "#ffebee" : "#e8f5e8",
                padding: "4px 12px",
                borderRadius: "20px",
              }}
            >
              {setDetails.retired ? "Retired" : "Available"}
            </span>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "12px 16px",
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            <strong style={{ color: "#1976d2", minWidth: "140px" }}>
              Release Year:
            </strong>
            <span style={{ fontSize: "1.1rem", fontWeight: "500" }}>
              {setDetails.release_year}
            </span>
          </Box>
        </Box>
      </Box>
    </Box>
  ) : (
    <></>
  );
};

export default DetailsBody;
