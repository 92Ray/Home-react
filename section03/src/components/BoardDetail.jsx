import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { BoardStateContext } from "../App";
import { BoardDispatchContext } from "../App";

const BoardDetail=>()=>{
    const nav = useNavigate();
    const {id} = useParams();
    const state = useContext(BoardStateContext);
    const {onDelete} = useContext(BoardDispatchContext);
    const targetBoard = state.find((item)=>String(item.id)=== String(id);

    const onClickDelete = () => {
        window.alert("정말 게시물을 삭제하시겠습니까?")
        onDelete(id)
        nav("/",{replace:true}) // 뒤로가기 금지 기능

    }

    return<>
    <div className="detail-container">
        <header className="detail-header">
            <div className="detail-info">
                <span className="info-id">게시글번호 : {targetBoard.id}</span>
                <span className="info-date">
                    작성일: {new date(targetBoard.createDate).toLocalDateString()}
                </span>
                <h2 className="detail-title">{targetBoard.title}</h2>
                <div className="detail-name">
                    작성자: <Strong>{targetBoard.name}</Strong>
                </div>
            </div>
        </header>
        
        

    </div>
    
    </>
}