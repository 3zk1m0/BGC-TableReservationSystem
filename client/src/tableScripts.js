import React from 'react'
import ReactDOM from 'react-dom'

//Custom imports.
import {
  cache
} from "./numberFields"

const MOCK_DATABASE = {
    "tables": {
        "table1": {
            "capacity": 2,
            "min_players": 1
        },
        "table2": {
            "capacity": 3,
            "min_players": 2
        },
        "table3": {
            "capacity": 7,
            "min_players": 4
        },
        "table4": {
            "capacity": 6,
            "min_players": 3
        },
        "table5": {
            "capacity": 6,
            "min_players": 3
        },
        "table6": {
            "capacity": 7,
            "min_players": 4
        },
        "table7": {
            "capacity": 10,
            "min_players": 5
        },
        "table8": {
            "capacity": 4,
            "min_players": 2
        },
        "table9": {
            "capacity": 4,
            "min_players": 2
        }
    }
}

const Table = ({tableNumber}) => {
    let elementId = `table${tableNumber}`
    return (
        <div id={elementId} className="table">{tableNumber}</div>
    )
}

export const Tables = () => {
    return (
        <div id="tables">
            <RelevantTables />
        </div>
    )
}

const RelevantTables = () => {
    /*const [clicks, setClicks] = useState({
        left: 0, right: 0
    })*/

    let tables = getRelevantTableIds()
    
    return tables.map(table => {
        return <Table tableNumber={table} />
    })
}

let getPlayerCount = () => {
    /*
    Return the amount of players expected as well as the amount of strangers allowed.
    */
    return cache.heads + cache.strangers
}

let getRelevantTableIds = () => {
    /*
    Return a list of table IDs which are appropriate for the selected player count.
    */
    let tableIds = []
    let players = getPlayerCount()

    for (let tableId in MOCK_DATABASE.tables) {
        if (!MOCK_DATABASE.tables.hasOwnProperty(tableId)) {
            continue
        }
        let table = MOCK_DATABASE.tables[tableId]
        console.log(`Players: ${players}, ID: ${tableId}, Capacity: ${table.capacity}, Min Players: ${table.min_players}`)
        if (players <= table.capacity && players >= table.min_players) {
            tableIds.push(tableId.slice(-1))
        }
    }

    return tableIds
}