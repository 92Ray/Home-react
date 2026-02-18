import { useNavigate } from "react-router-dom";
import Board from "./Board";

const List = ({state})=>{
    

    return<>
    <div className="board-container">
        <h2>커뮤니티 게시판</h2>
        <div className="board-header">
            <span className="tota-count">전체 글 <b>{state.length}</b>개</span>
            <button className="write-btn" conClick={()=>nav("/nav")}>글쓰기</button>
        </div>

        <table className="board-table">
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>날짜</th>
                </tr>
            </thead>
        </table>

    </div>
    
    </>
}