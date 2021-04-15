import React from 'react'

const Particles = ({ particles }) => {
    return (
        <div>
            <center><h1>Particles List</h1></center>
            <table class="pf-c-table pf-m-grid-md" role="grid" aria-label="Supersonic Subatomic Particles" id="table-basic">
                <caption>Supersonic Subatomic Particles</caption>
                <thead>
                    <tr role="row">
                        <th role="columnheader" scope="col">Name</th>
                    </tr>
                </thead>
                {particles.map((particle) => (
                    <tbody role="rowgroup">
                        <tr role="row">
                            <td role="cell" data-label="Particle name">{particle.name}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>

    )
};

export default Particles