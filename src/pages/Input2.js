import React, {useState} from "react";

export function Input2(){
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        tel: ""
    });

    const onChange = (e) =>{
        const value = e.target.value;
        const id = e.target.id;
        setInputs({
            ...inputs,
            [id]: value
        });
    };

    return (
        <div>
            <div>
                <label>이름</label>
                <input type={"text"} id="name" value={inputs.name} onChange={onChange}/>

            </div>
            <div>
                <label>이메일</label>
                <input type={"email"} id="email" value={inputs.email} onChange={onChange}/>

            </div>
            <div>
                <label>전화번호</label>
                <input type={"tel"} id="tel" value={inputs.tel} onChange={onChange}/>

            </div>
            <br/>

            <p>Name :  {inputs.name}</p>
            <p>email :  {inputs.email}</p>
            <p>tel :  {inputs.tel}</p>
        </div>
    )
}
