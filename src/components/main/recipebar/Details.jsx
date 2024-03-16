import PropTypes from 'prop-types';
const Details = ({ type }) => {
    return (
        <div className="overflow-x-auto mt-2">
            <table className="table font-fira_sans text-[#878787] table-xs lg:table-md xl:table-lg">
                <thead className="xl:text-base font-medium">
                    <tr>
                        <th>SL</th>
                        <th colSpan="2">Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover font-normal">
                        <th>1</th>
                        <td colSpan="2">Chicken Caesar Salad</td>
                        <td>20 mins</td>
                        <td>400 cal</td>
                        {!type && <td className="flex lg:hidden">
                            <button className="btn font-lexend bg-spring-green-500 hover:bg-spring-green-600 rounded-[50px] text-haiti-950 btn-sm xl:btn-md">P</button>
                        </td>}
                        {!type && <td className="hidden lg:flex">
                            <button className="btn font-lexend bg-spring-green-500 hover:bg-spring-green-600 rounded-[50px] text-haiti-950 btn-sm xl:btn-md">Prepare</button>
                        </td>}
                    </tr>
                </tbody>
                {
                    type && <tfoot className="text-xs lg:text-base font-medium font-[#282828CC]">
                        <tr>
                            <th colSpan="3">&nbsp;</th>
                            <th>Total Time = <br /> 45 minutes</th>
                            <th>Total Calories = <br /> 45 calories</th>
                        </tr>
                    </tfoot>
                }
            </table>
        </div>
    );
};
Details.propTypes = {
    type: PropTypes.bool.isRequired
};
export default Details;