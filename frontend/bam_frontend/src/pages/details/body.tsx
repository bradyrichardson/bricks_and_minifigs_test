import { Close as CloseIcon } from "@mui/icons-material";
import { Box, IconButton, Modal } from "@mui/material";
import type { JSX } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import type { RouteOptions } from "../../utils/route/i_route";

const DetailsBody = (options: RouteOptions): JSX.Element => {
  const data = options.data;
  const params = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const setDetails = data?.find((set) => {
    return set.id === params.id;
  });

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage("");
  };

  return setDetails ? (
    <Box
      sx={{
        display: "flex",
        gap: 6,
        alignItems: "flex-start",
        padding: 3,
      }}
    >
      {/* image section */}
      <Box sx={{ flex: 1, maxWidth: "50%" }}>
        <img
          src={setDetails.image_urls[0]}
          alt={setDetails.name}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
            cursor: "pointer",
          }}
          onClick={() => handleImageClick(setDetails.image_urls[0])}
        />

        {/* Additional images section */}
        {setDetails.image_urls.length > 1 && (
          <Box sx={{ marginTop: 3 }}>
            <h3
              style={{
                marginBottom: "1rem",
                color: "#1976d2",
                fontSize: "1.2rem",
                fontWeight: "600",
              }}
            >
              Additional Images
            </h3>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                justifyContent: "flex-start",
              }}
            >
              {setDetails.image_urls.slice(1).map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt={`${setDetails.name} - Image ${index + 2}`}
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                    transition: "transform 0.2s ease-in-out",
                  }}
                  onClick={() => handleImageClick(imageUrl)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              ))}
            </Box>
          </Box>
        )}
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
                color: setDetails.retired === "TRUE" ? "#d32f2f" : "#2e7d32",
                backgroundColor:
                  setDetails.retired === "TRUE" ? "#ffebee" : "#e8f5e8",
                padding: "4px 12px",
                borderRadius: "20px",
              }}
            >
              {setDetails.retired === "TRUE" ? "Retired" : "Available"}
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

      {/* Modal for full-size image viewing */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "90vw",
            maxHeight: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: -50,
              right: -50,
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={selectedImage}
            alt="Full size view"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              width: "auto",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            }}
          />
        </Box>
      </Modal>
    </Box>
  ) : (
    <></>
  );
};

export default DetailsBody;
