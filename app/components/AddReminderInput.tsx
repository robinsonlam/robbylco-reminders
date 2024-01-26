import { useState } from 'react';

export default function AddReminderInput() {
    const [reminderInput, setReminderInput] = useState('');

    return (
        <div>
            <form action="" className="bg-white p-2 rounded shadow-sm flex">
                <label>
                    <input
                        className="px-2 py-2 bg-transparent mr-2 text-sm text-slate-500 hover:text-slate-800 transition"
                        value={reminderInput}
                        onChange={(e) => setReminderInput(e.target.value)}
                    />
                </label>
                <button 
                    className="bg-slate-600 px-6 rounded text-sm text-white hover:bg-sky-800 transition"
                    type="submit"
                >Create reminder</button>
            </form>

            <div className="debug" style={{display: 'block'}}>
                <p>Your value: { reminderInput }</p>
            </div>
        </div>
    )
}