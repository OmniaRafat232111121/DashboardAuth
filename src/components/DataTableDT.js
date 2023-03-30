import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import { BsSortDown } from 'react-icons/bs';
const sortIcon = <BsSortDown />;
const DataTbleDT = ({
  columns,
  data,
  title,
  select,
  pagination,
  paginationServer,
  paginationTotalRows,
  onChangeRowsPerPage,
  onChangePage,
  progressPending,
  progressComponent,
}) => {
  const customStyles = {
    tableWrapper: {
      style: {
        display: 'table',
        border: '1px solid #E6E9F1',
        width: '99.9%',
        overflow: 'hidden',
        borderRadius: '8px',
      },
    },
    header: {
      style: {
        color: '#FFFFFF',
        fontWeight: 800,
        minHeight: '60px',
        paddingLeft: '0px',
        textAlign: 'center',
        textTransform: 'uppercase',
      },
    },
    head: {
      style: {
        color: 'orange',
      },
    },
    headRow: {
      style: {
        backgroundColor: '#E6E9F1',
        minHeight: '48px',
      },
      denseStyle: {
        minHeight: '30px',
      },
    },
    headCells: {
      style: {
        textTransform: 'uppercase',
        fontWeight: 700,
        color: '#052A30',
        paddingLeft: '10px',
        paddingRight: '10px',
      },
      activeSortStyle: {
        color: '#ccc',
        '&:focus': {
          outline: 'none',
        },
        '&:hover:not(:focus)': {
          color: '#E6E9F1',
        },
      },
      inactiveSortStyle: {
        '&:focus': {
          outline: 'none',
          color: '',
        },
        '&:hover': {
          color: '',
        },
      },
    },
    cells: {
      style: {
        paddingLeft: '10px',
        paddingRight: '10px',
        wordBreak: 'break-word',
      },
    },
    rows: {
      style: {
        minHeight: '45px',
        width: '99.8%',
        marginLeft: '1px',
        marginRight: '1px',
      },
      denseStyle: {
        fontSize: '12px',
        minHeight: '40px',
      },
      highlightOnHoverStyle: {
        backgroundColor: '#f7fcf7',
      },
    },
  };

  createTheme('ElevateLight', {
    text: {
      primary: '#393939',
      secondary: '#000',
    },
    background: {
      default: '#fff',
    },
    context: {
      background: '#f7fcf7',
      text: '#FFFFFF',
    },
    divider: {
      default: '#E6E9F1',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  });

  return (
    <DataTable
      columns={columns}
      data={data}
      selectableRows={select}
      selectableRowsNoSelectAll={false}
      selectableRowsVisibleOnly={false}
      selectableRowsHighlight={true}
      selectableRowsSingle={false}
      expandableRows={false}
      expandOnRowClicked={false}
      expandOnRowDoubleClicked={false}
      expandableRowsHideExpander={false}
      highlightOnHover={false}
      striped={false}
      pointerOnHover={false}
      dense={false}
      persistTableHead={false}
      noHeader={false}
      fixedHeader={false}
      fixedHeaderScrollHeight="300px"
      noTableHead={false}
      noContextMenu={false}
      direction="right"
      subHeader={false}
      subHeaderAlign="right"
      subHeaderWrap={true}
      responsive
      disabled={false}
      customStyles={customStyles}
      sortIcon={sortIcon}
      pagination={pagination}
      paginationServer={paginationServer}
      paginationTotalRows={paginationTotalRows}
      onChangeRowsPerPage={onChangeRowsPerPage}
      onChangePage={onChangePage}
      progressPending={progressPending}
      progressComponent={progressComponent}
    />
  );
};

export default DataTbleDT;