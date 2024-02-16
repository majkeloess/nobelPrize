import { styled } from "@mui/system";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Wikipedia from "./Wikipedia.js";
import Page from "./Page.js";
import { getData } from "./apiRes.js";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading.js";

const StyledTableContainer = styled(TableContainer)(() => ({
  backgroundColor: "#B7791F",
  opacity: 0.8,
}));

const StyledTableCell = styled(TableCell)(() => ({
  color: "black",
  borderBottom: "1px solid black",
}));

function createData(
  name: string,
  category: string,
  prize: string,
  birth: string,
  death: string,
  links: { wiki: string; moreData: string }
): Data {
  return { name, category, prize, birth, death, links };
}

export default function BasicTable(props: { year: string }) {
  const { data: dataQ, isLoading } = useQuery<YearData[], Error>({
    queryKey: ["year", props.year],
    queryFn: () => getData(props.year),
  });

  let rows: Data[] = [];

  if (dataQ) {
    rows = dataQ.map((el) => {
      return createData(
        el.name,
        el.category,
        el.prize,
        el.birth,
        el.death,
        el.links
      );
    });
  }
  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <StyledTableContainer component={Paper}>
        {/* <Paper> */}
        <Table sx={{ maxWidth: 1200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Category</StyledTableCell>
              <StyledTableCell align="center">Prize</StyledTableCell>
              <StyledTableCell align="center">Birth</StyledTableCell>
              <StyledTableCell align="center">Death</StyledTableCell>
              <StyledTableCell align="center">Links</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.category}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.prize} kr (SEK)
                </StyledTableCell>
                <StyledTableCell align="center">{row.birth}</StyledTableCell>
                <StyledTableCell align="center">{row.death}</StyledTableCell>
                <StyledTableCell align="center">
                  <div className="flex flex-row items-center justify-center gap-3">
                    <a href={row.links.wiki} target="_blank">
                      <Wikipedia />
                    </a>
                    <a href={row.links.moreData} target="_blank">
                      <Page />
                    </a>
                  </div>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* </Paper> */}
      </StyledTableContainer>
    );
  }
}
