let insertBox = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insertBox.innerHTML = `
        <div class='color'>
            <table>
                <tr>
                    <th>Key</th>
                    <th>KeyCode</th>
                </tr>
                <tr>
                    <td>${e.key === ' ' ? 'space' : e.key}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>
    `
})
