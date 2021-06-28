import { memo } from "react";
import {
  IconButton,
  List,
  ListItem,
  Popover,
  Typography,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import DoneIcon from "@material-ui/icons/Done";
import remove from "lodash/remove";
import React from "react";
import FormControlTextField from "./FormControlTextField";

const SingleSelect = (props) => {
  const {
    options,
    getOptionLabel,
    multiple,
    onSelectOption: test,
    id,
    disabled,
    isView,
    ...rest
  } = props;
  const [open, setOpen] = React.useState(false);
  const inputRef = React.useRef();
  const handleClick = () => {
    !disabled && setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const isChecked = React.useCallback(
    (one) => {
      if (props.multiple) {
        const { value } = props;
        return value && value?.length > 0
          ? value?.findIndex((v) => v === one?.id) !== -1
          : one?.id === undefined;
      }
      const { value } = props;
      return value === one?.id;
    },
    [options, props]
  );

  const onSelectValue = React.useCallback(
    (one, index) => {
      if (props.multiple) {
        const { value, onSelectOption } = props;
        let tmp;
        if (isChecked(one)) {
          tmp = value ? remove(value, (v) => v !== one?.id) : [];
        } else {
          tmp = value ? [...value, one?.id] : [one?.id];
        }
        const hasAll = tmp.filter((v) => v === undefined);
        const noUndefinedValue = tmp.filter((v) => v !== undefined);
        const noUndefinedOptions = options.filter((v) => v?.id !== undefined);
        if (
          hasAll?.length > 0 ||
          (noUndefinedValue?.length === noUndefinedOptions?.length &&
            options?.length !== noUndefinedOptions?.length)
        ) {
          onSelectOption && onSelectOption([]);
        } else {
          onSelectOption && onSelectOption(tmp);
        }
      } else {
        const { onSelectOption } = props;
        onSelectOption && onSelectOption(one?.id);
        setOpen(false);
      }
    },
    [isChecked, options, props]
  );

  const getTextInput = React.useMemo(() => {
    if (props.multiple) {
      const { value } = props;
      const defaultValue = options.find((v) => v?.id === undefined);
      return value && value.length > 0
        ? value
            .map((v) => {
              const tmp = options.find((one) => one?.id === v);
              if (tmp) {
                return getOptionLabel(tmp);
              }
              return undefined;
            })
            .join(", ")
        : defaultValue && getOptionLabel(defaultValue);
    }
    const { value } = props;
    const tmp = options?.find((one) => one?.id === value);
    return tmp && getOptionLabel(tmp);
  }, [getOptionLabel, options, props]);

  return (
    <>
      <FormControlTextField
        {...rest}
        id={id}
        readOnly
        focused={open}
        disabled={disabled}
        value={getTextInput || ""}
        innerRef={inputRef}
        isView={isView}
        endAdornment={
          isView ? null : (
            <>
              <IconButton style={{ padding: 2, marginRight: 6 }}>
                <ArrowDropDownIcon
                  style={{ transform: open ? "rotate(180deg)" : undefined }}
                />
              </IconButton>
            </>
          )
        }
        inputProps={{
          ...rest.inputProps,
          style: { textOverflow: "ellipsis", ...rest.inputProps?.style },
        }}
        onClick={handleClick}
      />
      <Popover
        open={open}
        anchorEl={inputRef?.current}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          style: {
            width: inputRef?.current?.offsetWidth,
            maxHeight: 350,
            marginTop: 4,
          },
          variant: "outlined",
        }}
        elevation={1}
      >
        <List>
          {options?.length > 0 &&
            options.map((one, index) => (
              <ListItem
                key={index}
                role={undefined}
                dense
                button
                onClick={() => {
                  onSelectValue(one, index);
                }}
                style={{
                  background: isChecked(one) ? "#bfddfe" : undefined,
                  overflow: "hidden",
                }}
              >
                <Typography
                  variant="body2"
                  style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    flex: 1,
                  }}
                >
                  {getOptionLabel && getOptionLabel(one)}
                </Typography>
                <DoneIcon
                  style={{
                    opacity: 0.6,
                    width: 18,
                    height: 18,
                    visibility: isChecked(one) ? "visible" : "hidden",
                    color: "#0070ef",
                    justifySelf: "flex-end",
                  }}
                />
              </ListItem>
            ))}
        </List>
      </Popover>
    </>
  );
};

export default memo(SingleSelect);
