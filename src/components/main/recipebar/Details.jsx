import PropTypes from 'prop-types';
import Item from './Item';
const Details = ({ type, data, handlePreparingFood }) => {
    return (
        <div className="overflow-x-auto mt-2">
            <table className="table font-fira_sans text-[#878787] table-xs lg:table-md">
                <thead className="xl:text-base font-medium">
                    <tr>
                        <th>SL</th>
                        <th colSpan="2">Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    <Item type={type} data={data} handlePreparingFood={type ? () => { } : handlePreparingFood} />
                </tbody>
                {
                    type && <tfoot className="text-xs lg:text-base font-medium font-[#282828CC]">
                        <tr>
                            <th colSpan="3">&nbsp;</th>
                            <th>Total Time = <br /> {data.reduce(((prev, curr) => prev + curr.time), 0)} mins</th>
                            <th>Total Calories = <br /> {data.reduce(((prev, curr) => prev + curr.calorie), 0)} cal</th>
                        </tr>
                    </tfoot>
                }
            </table>
        </div>
    );
};
Details.propTypes = {
    type: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,
    handlePreparingFood: PropTypes.func
};
export default Details;