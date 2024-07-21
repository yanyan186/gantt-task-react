import React from "react";
import styles from "./task-list-header.module.css";

export const TaskListHeaderDefault: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
}> = ({ headerHeight, fontFamily, fontSize, rowWidth }) => {

  return (
    <div
      className={styles.ganttTable}
      style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
      }}
    >
      <div
        className={styles.ganttTable_HeaderSeparator}
        style={{
          minWidth: rowWidth,
          height: headerHeight * 0.5,
          paddingTop: headerHeight * 0.25,
          // marginTop: headerHeight * 0.2,
        }}
      >
        &nbsp;设备编号==
      </div>
      <div
        className={styles.ganttTable_HeaderItem}
        style={{
          minWidth: rowWidth,
        }}
      >
        &nbsp;设备名称
      </div>
      <div
        className={styles.ganttTable_HeaderItem}
        style={{
          minWidth: rowWidth,
          height: headerHeight * 0.5,
          paddingTop: headerHeight * 0.25,
        }}
      >
        &nbsp;状态
      </div>
    </div >
  );
};
