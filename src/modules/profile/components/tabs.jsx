import { useState } from 'react';
import { GridIcon, SavedIcon, TaggedIcon } from '../../../images/icons/icon';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="space-x-4 sm:w-9/12">
            <hr />
            <div className="flex justify-center">
                <button
                    className={`${activeTab === 0 ? 'text-white' : 'text-secondary'} px-4 py-2 rounded-md flex gap-2 items-center`}
                    onClick={() => setActiveTab(0)}
                >
                    <GridIcon strokeColor={`${activeTab === 0 ? '#FFFFFF' : '#8e8e8e9b'}`} size="20" />
                    Posts
                </button>
                <button
                    className={`${activeTab === 1 ? 'text-white' : 'text-secondary'} px-4 py-2 rounded-md flex gap-2 items-center`}
                    onClick={() => setActiveTab(1)}
                >
                    <SavedIcon strokeColor={`${activeTab === 1 ? '#FFFFFF' : '#8e8e8e9b'}`} size="20" />
                    Saved
                </button>
                <button
                    className={`${activeTab === 2 ? 'text-white' : 'text-secondary'} px-4 py-2 rounded-md flex gap-2 items-center`}
                    onClick={() => setActiveTab(2)}
                >
                    <TaggedIcon strokeColor={`${activeTab === 2 ? '#FFFFFF' : '#8e8e8e9b'}`} size="20" />
                    Tagged
                </button>
            </div>
            <div className="mt-4">
                {activeTab === 0 && (
                    <div className="grid grid-cols-3 gap-4">
                        <div className="aspect-w-1 aspect-h-1">
                            <img
                                src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2011/11/square-format-01.jpg?resize=600%2C600&ssl=1"
                                alt=""
                                className="object-cover w-full h-full rounded-md"
                            />
                        </div>
                        <div className="aspect-w-1 aspect-h-1">
                            <img
                                src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2011/11/square-format-01.jpg?resize=600%2C600&ssl=1"
                                alt=""
                                className="object-cover w-full h-full rounded-md"
                            />
                        </div>
                        <div className="aspect-w-1 aspect-h-1">
                            <img
                                src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2011/11/square-format-01.jpg?resize=600%2C600&ssl=1"
                                alt=""
                                className="object-cover w-full h-full rounded-md"
                            />
                        </div>
                    </div>
                )}
                {activeTab === 1 && <div>This is the content of Tab 2.</div>}
                {activeTab === 2 && <div>This is the content of Tab 3.</div>}
            </div>
        </div>
    );
};

export default Tabs;
