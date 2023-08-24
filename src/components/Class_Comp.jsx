import React, { Component } from 'react';

class Class_Comp extends Component {
    render() {
        let a = 3;
        let b = 4;
        let sum = a + b
        return (
            <>
                {/* <div>
                    <h1>danh sach khoa hoc</h1>
                    <ul>
                        <li>html</li>
                        <li>css</li>
                        <li>js</li>
                    </ul>
                </div> */}
                <div>
                    <h1>tong cua 3 va 4 la {sum}</h1>
                    <h1>tong cua {a} va {b} la {sum}</h1>
                </div>
            </>
        );
    }
}

export default Class_Comp;
