import clsx from "clsx";
import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { usePagination } from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import Link from "@src/link/Link";
import ButtonComponent from "@src/button/Button";

const useStyles = makeStyles({
  ul: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    alignItems: "center",
  },
  btnPage: {
    minWidth: 33,
    padding: 0,
    margin: "0 4px",
  },
  btnPageSelect: {
    backgroundColor: "#16161d",
    color: "#fdfdfd",
    "&:hover": {
      backgroundColor: "#16161d",
    },
  },
  linkBtn: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  btnNextPrev: {
    fontSize: 22,
    padding: 8,
  },
});

const UsePagination = ({
  pageSize = 0,
  pageNum = 0,
  className = undefined,
  isLink = false,
  handleChangePage = () => {},
}) => {
  const classes = useStyles();
  const { items } = usePagination({
    count: pageSize,
    page: pageNum,
  });
  const router = useRouter();
  return (
    <nav className={className}>
      <ul className={classes.ul}>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            if (isLink) {
              children = (
                <Link
                  href={{
                    query: {
                      ...router.query,
                      page,
                    },
                  }}
                  className={classes.linkBtn}
                >
                  <ButtonComponent
                    typeButton="outlined"
                    borderColor="#eff3f0"
                    backgroundColor="#fdfdfd"
                    color="#354052"
                    height={22}
                    width={33}
                    className={clsx(
                      classes.btnPage,
                      selected && classes.btnPageSelect
                    )}
                  >
                    {page}
                  </ButtonComponent>
                </Link>
              );
            } else {
              children = (
                <ButtonComponent
                  typeButton="outlined"
                  borderColor="#eff3f0"
                  backgroundColor="#fdfdfd"
                  color="#354052"
                  height={22}
                  width={33}
                  className={clsx(
                    classes.btnPage,
                    selected && classes.btnPageSelect
                  )}
                  handleClick={handleChangePage(page)}
                >
                  {page}
                </ButtonComponent>
              );
            }
          } else {
            if (!item.disabled) {
              if (isLink) {
                children = (
                  <Link
                    href={{
                      query: {
                        ...router.query,
                        page: type === "previous" ? pageNum - 1 : pageNum + 1,
                      },
                    }}
                  >
                    <IconButton {...item} className={classes.btnNextPrev}>
                      {type === "previous" ? (
                        <ArrowBackIosIcon />
                      ) : (
                        <ArrowForwardIosIcon />
                      )}
                    </IconButton>
                  </Link>
                );
              } else {
                children = (
                  <IconButton
                    {...item}
                    className={classes.btnNextPrev}
                    onClick={handleChangePage(
                      type === "previous" ? pageNum - 1 : pageNum + 1
                    )}
                  >
                    {type === "previous" ? (
                      <ArrowBackIosIcon />
                    ) : (
                      <ArrowForwardIosIcon />
                    )}
                  </IconButton>
                );
              }
            } else {
              children = (
                <IconButton {...item} className={classes.btnNextPrev}>
                  {type === "previous" ? (
                    <ArrowBackIosIcon />
                  ) : (
                    <ArrowForwardIosIcon />
                  )}
                </IconButton>
              );
            }
          }

          return <li key={index}>{children}</li>;
        })}
      </ul>
    </nav>
  );
};
UsePagination.propTypes = {
  pageSize: PropTypes.number,
  pageNum: PropTypes.number,
  className: PropTypes.any,
  isLink: PropTypes.bool,
  handleChangePage: PropTypes.func,
};

export default UsePagination;
