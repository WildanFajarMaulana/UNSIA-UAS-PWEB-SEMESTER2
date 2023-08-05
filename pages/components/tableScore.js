import React from "react";

const formatDateToDisplay = (dateStr) => {
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const months = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];

    const date = new Date(dateStr);
    const dayOfWeek = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayOfWeek}, ${day} ${month} ${year}`;
};

const sortDataByDate = (data) => {
    return data.sort((a, b) => new Date(a.date) - new Date(b.date));
};

const addNumbering = (data) => {
    return data.map((item, index) => ({ ...item, number: index + 1 }));
};

const TableScore = ({ data }) => {
    const sortedData = sortDataByDate(data);
    const numberedData = addNumbering(sortedData);

    return (
        <table className="w-full text-center border-collapse">
            <thead>
            <tr>
                <th className="border-b border-gray-500 py-4">No.</th>
                <th className="border-b border-gray-500 py-4">Nama</th>
                <th className="border-b border-gray-500 py-4">Kelas</th>
                <th className="border-b border-gray-500 py-4">Nilai</th>
                <th className="border-b border-gray-500 py-4">Waktu Pengerjaan</th>
            </tr>
            </thead>
            <tbody>
            {numberedData.map((item) => (
            <tr key={item.id}>
                <td className="border-b border-gray-500 py-4">{item.number}.</td>
                <td className="border-b border-gray-500 py-4">{item.name}</td>
                <td className="border-b border-gray-500 py-4">{item.class}</td>
                <td className="border-b border-gray-500 py-4">{item.score}</td>
                <td className="border-b border-gray-500 py-4">
                {formatDateToDisplay(item.date)}
                </td>
            </tr>
            ))}
            </tbody>
        </table>
    );

};

export default TableScore;
