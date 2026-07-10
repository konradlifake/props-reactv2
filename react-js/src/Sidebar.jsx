function Sidebar(props) {
    return(
        <aside style={{
            border:"2px white solid",
            width:"150px",
            marginTop:"20px",
            padding:"20px"
        }}>
            <h2>{props.title}</h2>

            <ul>
                <li>{props.item1}</li>
                <li>{props.item2}</li>
                <li>{props.item3}</li>
            </ul>
        </aside>
    );
}
export default Sidebar