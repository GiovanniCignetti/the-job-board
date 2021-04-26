const Job = (props) => {
  return (
    <div className={`${props.borderColor} job`}>
      <p className="topJob">{props.title}</p>
      <p className="bottomJob">
        {props.contractType} - {props.country} - {props.city}
      </p>
    </div>
  );
};

export default Job;
