import React from 'react'
import CustomLabel from './Label';
import CustomButton from './CustomButton';

interface CustomModelProps {
    handleModelOpen: () => void;
    handleSave: () => void;
    handleClose: () => void;
    title: string;
    saveText: string;
    closeText: string;
    footerActive: boolean;
    children: React.ReactNode;
}

const CustomModel: React.FC<CustomModelProps> = ({ handleModelOpen, handleClose, handleSave, closeText, saveText, title, footerActive, children }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div
                className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 scale-100"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 className="text-xl font-semibold text-gray-900">
                        {title}
                    </h2>
                    <button
                        onClick={handleModelOpen}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                    >
                        <CustomLabel size='xs' children={<>X</>} color="text-gray-500" />
                    </button>
                </div>

                <div className="p-6 space-y-4">
                    {children}
                </div>

                {
                    footerActive ?
                        <div className="flex justify-end gap-3 p-6 border-t border-gray-100">
                            <CustomButton
                                type='sec'
                                onClick={handleClose}
                            >
                                {closeText}
                            </CustomButton>
                            <CustomButton
                                type='pmy'
                                onClick={handleSave}
                            >
                                {saveText}
                            </CustomButton>
                        </div> : <></>
                }
            </div>
        </div>)
}

export default CustomModel