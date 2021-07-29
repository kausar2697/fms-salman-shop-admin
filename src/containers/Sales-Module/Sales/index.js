import React from "react";
import { Col, Row } from "react-bootstrap";
import DeleteIcon from "@material-ui/icons/Delete";
import Layout from "../../../components/Layout";
import {
  Card,
  Button,
  Input,
  Divider,
  Snackbar,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  CardContent,
  InputBase,
  IconButton,
} from "@material-ui/core/";
import MuiAlert from "@material-ui/lab/Alert";
import "./Sales.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const columns = [
  { id: "medicine", label: "Id", minWidth: 170 },
  { id: "company", label: "Company Name", minWidth: 100 },
  {
    id: "group",
    label: "Name",
    minWidth: 170,
    align: "right",
  },
  {
    id: "country",
    label: "Price",
    minWidth: 170,
    align: "right",
  },
  {
    id: "purchase",
    label: "Quantity",
    minWidth: 100,
    align: "right",
  },
  {
    id: "sale",
    label: "Total",
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
];

const test = (id) => {
  console.log(id);
};

const Sales = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Layout sidebar>
        <Row>
          {/* medicine input and cart section */}
          <Col md={8}>
            {/* top section */}
            {/* <Row> */}
            <Card style={{ padding: "0px 20px 20px 20px" }}>
              <h4 className="sales-panel-heading">Sales Panel</h4>
              <Row>
                <Col md={8}>
                  <div className="input-group mb-3">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-default"
                    >
                      Search
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>

                  <div className="input-group mb-3">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-default"
                    >
                      Company
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>

                  <div className="input-group mb-3">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-default"
                    >
                      Group
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                </Col>

                <Col md={4}>
                  <div className="input-group mb-3">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-default"
                    >
                      Stock
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>

                  <div className="input-group mb-3">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-default"
                    >
                      Purchase Price
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>

                  <div className="input-group mb-3">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-default"
                    >
                      Sale Price
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>

                  <div className="input-group mb-3">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-default"
                    >
                      Qty
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                  >
                    Add To Cart
                  </Button>
                </Col>
              </Row>
            </Card>

            {/* cart section */}
            <Card
              style={{ padding: "0px 20px 20px 20px" }}
              className="cart-section-card"
            >
              <h5 className="cart-panel-heading">My Cart Panel</h5>
              <Row>
                <Paper>
                  <TableContainer>
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
                        {rows.map((row) => {
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
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                  >
                                    {value}
                                  </TableCell>
                                );
                              })}

                              <TableCell align={"center"}>
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
                </Paper>
              </Row>
            </Card>
          </Col>

          {/* Summary section */}
          <Col md={4}>
            <Card>
              <h4 className="sale-details-heading">Sales Details Panel</h4>

              <div className="input-group mb-3 sales-details-input">
                <span>Sales No</span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>

              <div className="input-group mb-3 sales-details-input">
                <span>Total Amount</span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>

              <div className="input-group mb-3 sales-details-input">
                <span>Discount</span>
                <Input
                  //   defaultValue="Hello world"
                  placeholder="percentage (%)"
                  inputProps={{ "aria-label": "description" }}
                  className="sale-details-discount-input"
                />
                <Input
                  placeholder="amount ($)"
                  inputProps={{ "aria-label": "description" }}
                  className="sale-details-discount-input"
                />
              </div>

              <div className="input-group mb-3 sales-details-input">
                <span>Total With VAT</span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>

              <div className="input-group mb-3 sales-details-input">
                <span>Customer Name</span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>

              <Divider />

              <div className="input-group mb-3 sales-details-input">
                <span>Received</span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>

              <div className="input-group mb-3 sales-details-input">
                <span>Retrun</span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>

              <div class="text-center">
                <Button
                  className="sale-details-sale-btn"
                  variant="contained"
                  color="primary"
                >
                  SALE
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Item Added To The Cart!
          </Alert>
        </Snackbar>
      </Layout>
    </>
  );
};

export default Sales;
