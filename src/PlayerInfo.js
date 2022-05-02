const PlayerInfo = (props) => {
    return (
        <>
            <h3>Player Info:</h3>
            <div>
                {props.fullName} <br />
                {props.age}<br />
                {props.nationality}
            </div>
            <Date date={props.date}></Date> 
        </>
    );
}

const Date = (props) => {
    return (
        <>
            <h3>Date:</h3>
            <div>
                {props.date}
            </div>
        </>
    );
}

export default PlayerInfo;   