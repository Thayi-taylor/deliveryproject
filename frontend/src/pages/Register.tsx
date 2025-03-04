import { useState } from "react";
import axios from "axios";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("STORE");

    const handleRegister = async () => {
        try {
            const response = await axios.post("http://localhost:8080/auth/register", null, {
                params: { username, password, role }
            });
            alert("회원가입 성공: " + response.data.username);
        } catch (error) {
            alert("회원가입 실패");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
                <h1 className="text-xl font-bold text-center">회원가입</h1>
                <input type="text" placeholder="아이디" className="border p-2 w-full my-2" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="비밀번호" className="border p-2 w-full my-2" value={password} onChange={(e) => setPassword(e.target.value)} />
                <select className="border p-2 w-full my-2" value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="STORE">매장</option>
                    <option value="RIDER">기사</option>
                </select>
                <button className="bg-blue-500 text-white p-2 rounded w-full" onClick={handleRegister}>
                    회원가입
                </button>
            </div>
        </div>
    );
};

export default Register;
