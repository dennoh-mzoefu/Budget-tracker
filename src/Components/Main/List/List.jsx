import React from "react";
import useStyles from "./styles";
import {
  List as MUIList,
  ListItem,
  Slide,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";

function List() {
  const classes = useStyles();
  const transactions = [
    {
      id: 1,
      type: "Income",
      category: "Salary",
      amount: 50,
      date: "Sat Jul 16 2022",
    },
    {
      id: 2,
      type: "Expense",
      category: "Business",
      amount: 100,
      date: "Sun Jul 17 2022",
    },
    {
      id: 3,
      type: "Income",
      category: "Pets",
      amount: 150,
      date: "Mon Jul 18 2022",
    },
  ];
  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick="">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
}

export default List;