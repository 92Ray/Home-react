import { useNavigate } from "react-router-dom";

const Board=({id, title, name, createDate})=>{
    const nav = useNavigate();

    return<>
    <tr className="board-item-row" onClick={()=> nav('/BoardDetail/${id}')}>
        <td className="col-no">{id}</td>
        <td className="col-title">{title}</td>
        <td className="col-name">{name}</td>
        <td className="col-createDate">{new Date(createDate).toLocaleDateString()}</td>
    </tr>
    
    </>
}