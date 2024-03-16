import PropTypes from 'prop-types';
import Details from "./Details";

const Sidebar = ({ wantToCook }) => {
    return (
        <div className="min-h-96 border border-[#28282833] text-center py-8 rounded-2xl space-y-12">
            <div>
                <h1 className="text-[#282828] text-2xl font-semibold">Want to cook: {wantToCook.length}</h1>
                <div className="flex flex-col w-3/4 mx-auto my-4">
                    <div className="divider m-0"></div>
                </div>
                <Details type={false} wantToCook={wantToCook} />
            </div>
            <div>
                <h1 className="text-[#282828] text-2xl font-semibold">Currently cooking: 02</h1>
                <div className="flex flex-col w-3/4 mx-auto my-4">
                    <div className="divider m-0"></div>
                </div>
                <Details type={true} wantToCook={wantToCook} />
            </div>
        </div>
    );
};
Sidebar.propTypes = {
    wantToCook: PropTypes.array.isRequired
};
export default Sidebar;