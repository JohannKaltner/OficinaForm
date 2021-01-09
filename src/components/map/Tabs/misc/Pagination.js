import React, { useState } from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { useSelector } from "react-redux";
import { GetOficinas } from "../../../../services/functions/userRequests";
export default function PaginationTab() {
  const estado = useSelector((state) => state);

  const [page, setPage] = useState(1);

  const DoPagination = (action, value) => {
    let Page;
    switch (action) {
      case "FirstPage":
        Page = 1;
        break;
      case "NextPage":
        Page = page + 1;
        break;
      case "PreviousPage":
        Page = page - 1;
        break;
      case "LastPage":
        Page = 10;
        break;
      case "ByIndex":
        Page = value;
        break;
    }
    setPage(Page);
    GetOficinas(Page);
  };

  const buttonStyle={
    paddingLeft: 20,
    paddingRight: 20,
    display: page === estado.clickState?.PageCount ? 'none' : 'flex'
  }

  return (

    <div>
      <ButtonGroup
        variant="text"
        color="primary"
        aria-label="text primary button group"
      >
        <Button  style={buttonStyle} disabled={page === 1} onClick={() => DoPagination("FirstPage")}>
          <SkipPreviousIcon />
        </Button>
        <Button style={buttonStyle} disabled={page === 1} onClick={() => DoPagination("PreviousPage")}>
          <KeyboardArrowLeftIcon />
        </Button>
        { 
          [1].map((pageNext, index) => {
            let value = page - pageNext;
            return (
              <Button style={buttonStyle}
                style={{display: page > 1 ? 'flex' : 'none'}}
                onClick={() => DoPagination("ByIndex", value)}
                key={index}
              >
                {value}
              </Button>
            );
          })}
        <Button style={buttonStyle} variant="contained">{page}</Button>
        {[1].map((pageNext, index) => {
          let value = page + pageNext;
          return (
            <Button style={buttonStyle}  onClick={() => DoPagination("ByIndex", value)} key={index}>
              {value}
            </Button>
          );
        })}
        <Button style={buttonStyle}  disabled={page === estado.clickState?.PageCount} onClick={() => DoPagination("NextPage")}>
          <KeyboardArrowRightIcon />
        </Button>
      {console.log(estado.clickState?.PageCount)}
        <Button style={buttonStyle} disabled={page === estado.clickState?.PageCount} onClick={() => DoPagination("LastPage")}>
          <SkipNextIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
}
