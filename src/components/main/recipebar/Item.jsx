import PropTypes from 'prop-types';
const Item = ({ type, data }) => {
    return (
        <>
            {data.map((item, idx) => <tr key={item.id} className="hover font-normal">
                <th>{idx + 1}</th>
                <td colSpan="2">{item.name}</td>
                <td>{item.time} mins</td>
                <td>{item.calorie} cal</td>
                {!type && <td className="flex lg:hidden">
                    <button className="btn font-lexend bg-spring-green-500 hover:bg-spring-green-600 rounded-[50px] text-haiti-950 btn-sm xl:btn-md">P</button>
                </td>}
                {!type && <td className="hidden lg:flex">
                    <button className="btn font-lexend bg-spring-green-500 hover:bg-spring-green-600 rounded-[50px] text-haiti-950 btn-sm xl:btn-md">Prepare</button>
                </td>}
            </tr>)}
        </>

    );
};
Item.propTypes = {
    type: PropTypes.bool.isRequired
};
export default Item;