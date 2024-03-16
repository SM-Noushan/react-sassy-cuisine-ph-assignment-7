import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Item from './Item';
const Details = ({ type, wantToCook }) => {
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
                    <Item type={type} data={type ? [] : wantToCook} />
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
    type: PropTypes.bool.isRequired,
    wantToCook: PropTypes.array.isRequired
};
export default Details;