import React from "react";
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Card,
  CardContent,
  InputBase,
  IconButton,
} from "@material-ui/core/";
import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import Layout from "../../../components/Layout";

const columns = [
  { id: "medicine", label: "Medicine Name", minWidth: 170 },
  { id: "company", label: "Company Name", minWidth: 100 },
  {
    id: "group",
    label: "Group Name",
    minWidth: 170,
    align: "right",
  },
  {
    id: "country",
    label: "Manufacturer Country",
    minWidth: 170,
    align: "right",
  },
  {
    id: "purchase",
    label: "Purchase Price",
    minWidth: 100,
    align: "right",
  },
  {
    id: "sale",
    label: "Sale Price",
    minWidth: 100,
    align: "right",
  },
  {
    id: "alart",
    label: "Alart Qty",
    minWidth: 100,
    align: "right",
  },
  {
    id: "stock",
    label: "Stock",
    minWidth: 100,
    align: "right",
  },
];

function createData(medicine, group, country, purchase) {
  return { medicine, group, country, purchase };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

const useStyles = makeStyles({
  root: {
    width: "90%",
  },
  container: {
    maxHeight: 700,
  },
});

export default function SalesReport() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const test = (id) => {
    console.log(id);
  };

  const search = (e) => {
    e.preventDefault();
  };

  return (
    <Layout sidebar>
      <Card className={classes.root}>
        <CardContent>
          <Paper component="form" className={classes.root}>
            <InputBase
              className={classes.input}
              style={{ width: "20%", padding: 20 }}
              placeholder="Search Medicine"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
              onClick={search}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </CardContent>
      </Card>

      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell style={{ minWidth: 170 }} align={"center"}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        );
                      })}

                      <TableCell align={"center"}>
                        <IconButton>
                          <CreateIcon />
                        </IconButton>
                        <IconButton onClick={() => test(row.medicine)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Layout>
  );
}
