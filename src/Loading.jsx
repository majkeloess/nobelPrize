import CircularProgress from "@mui/material-next/CircularProgress";

export default function Loading() {
  return (
    <>
      <div className="flex justify-center items-center h-[400px] align-middle">
        <CircularProgress
          sx={{ width: "70px", height: "70px" }}
          color="secondary"
          fourColor={false}
          variant="indeterminate"
        />
      </div>
    </>
  );
}
