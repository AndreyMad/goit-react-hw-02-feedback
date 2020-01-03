import React from "react";
import PropTypes from "prop-types";
import style from "./Stats.module.css";

const randomColorMaker = () => {
  const r = Math.floor(Math.random() * (256 - 0));
  const g = Math.floor(Math.random() * (256 - 0));
  const b = Math.floor(Math.random() * (256 - 0));
  return `${r},${g},${b}`;
};

const Stats = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>File upload</h2>}

      <ul className={style.stat_list}>
        {stats.map(item => (
          <li
            key={item.id}
            className={style.item}
            style={{
              width: `${item.percentage}%`,
              backgroundColor: `rgb(${randomColorMaker()})`
            }}
          >
            <span className={style.label}>{item.label}</span>
            <span className={style.percentage}>{`${item.percentage}%`}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Stats.propTypes = {
  title: PropTypes.bool.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  ).isRequired
};
export default Stats;
