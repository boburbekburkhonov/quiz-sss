import React from 'react';
import './List.css'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const List = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
      id: 'population',
      label: 'Population',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'size',
      label: 'Size\u00a0(km\u00b2)',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'density',
      label: 'Density',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
  ];

  function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
  }

  const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
      setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
  };

  const valueTodayTable = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
  ];

    return (
      <table
        className="table-style"
        id="table-style-hour-id"
      >
        <thead className="">
          <tr>
            <th rowSpan="2" className="sticky">
              T/R
            </th>
            <th
              rowSpan="2"
              className="sticky"
              style={{ left: "57px" }}
            >
              F.I.SH.
            </th>
          </tr>
          <tr>
            {/* {valueTodayTable.map((r, l) => {
              return <th key={l}>{r}</th>;
            })} */}
            <th>Xodimlar orasida o’zini tutishi </th>
            <th>Muomala madaniyati</th>
            <th>Ishga bo’lgan layoqati</th>
            <th>Ish vaqtidagi intizomi</th>
            <th>Ovqatlanish madaniyati</th>
            <th>Ish vaqtida beso’roq tashqariga chiqishi</th>
            <th>Ish vaqtida ishdan tashqari bo’lgan narsalarga ko’p vaqt ajratishi</th>
            <th>Ishga aloqasi bo’lmagan odamlar bilan telefonda ko’p gaplashishi</th>
            <th>Tozalikka rioya qilishi (kiyinishida; o’z ish joyida)</th>
            <th>Berilgan topshiriqlarni bajarishi</th>
          </tr>
        </thead>
        <tbody>
        <tr
          className="tr0"
        >
          <td className="sticky" style={{}}>
            1
          </td>
          <td
            className="text-start sticky fix-with"
            style={{ left: "57px" }}
          >
            <div className="d-flex align-items-center justify-content-center">
              <span className="fs-6 fw-normal">
                Ehsmaty
              </span>
            </div>
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        </tbody>
      </table>
    );
};

export default List;