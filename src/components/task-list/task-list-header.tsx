import React from "react";
import styles from "./task-list-header.module.css";

export const TaskListHeaderDefault: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
  columnNames: [];
}> = ({ headerHeight, fontFamily, fontSize, rowWidth, columnNames }) => {
  const columnDom = (item: string) => {
    return (
      <>
        <div
          className={styles.ganttTable_Header}
          style={{
            height: headerHeight - 2,
          }}
        ></div>
        <div
          className={styles.ganttTable_HeaderItem}
          style={{
            minWidth: rowWidth,
          }}
        >
          &nbsp;{item}
        </div>
      </>
    )
  }

  return (
    <div
      className={styles.ganttTable}
      style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
      }}
    >
      {columnNames.map((item) => {
        return columnDom(item)
      })
      }
      {/*          
        <div
          className={styles.ganttTable_HeaderSeparator}
          style={{
            height: headerHeight * 0.5,
            marginTop: headerHeight * 0.2,
          }}
        />
        <div
          className={styles.ganttTable_HeaderItem}
          style={{
            minWidth: rowWidth,
          }}
        >
          &nbsp;开始日期
        </div>
        <div
          className={styles.ganttTable_HeaderSeparator}
          style={{
            height: headerHeight * 0.5,
            marginTop: headerHeight * 0.25,
          }}
        />
        <div
          className={styles.ganttTable_HeaderItem}
          style={{
            minWidth: rowWidth,
          }}
        >
          &nbsp;结束日期
        </div> */}
    </div>
    // </div >
  );
};
