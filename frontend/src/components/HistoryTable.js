import HistoryRow from "./HistoryRow";
import TableHead from "./TableHead";

function HistoryTable({ services, onDelete, onEdit}) {
    return (
        <table id="historyTable">
            <caption>Vehicle History Log</caption>
            <TableHead />
            <tbody>
                {services.map((service, i) =>
                    <HistoryRow
                        service={service}
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />)}
            </tbody>
            <tfoot>

            </tfoot>
        </table>
    );
}

export default HistoryTable;