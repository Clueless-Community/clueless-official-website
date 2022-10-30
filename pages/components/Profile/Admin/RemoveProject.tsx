import DeleteIcon from '@mui/icons-material/DeleteOutline';
import { Dialog, DialogContent } from '@mui/material';
import { useSession } from 'next-auth/react';
import React, { FC } from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../../lib/clientApp';

interface Props {
    projectId: string;
    handleProjectFetch: () => Promise<void>;
}

const RemoveProject: FC<Props> = ({ projectId, handleProjectFetch }) => {
    const { data: session } = useSession();
    const uid = session?.user?.id;
    const [open, setOpen] = React.useState(false);
    const handleOpen: React.MouseEventHandler<HTMLButtonElement> = e => {
        e.stopPropagation();
        e.preventDefault();
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const deleteProject = async () => {
        if (uid) {
            await deleteDoc(doc(db, `users/${uid}/projects`, projectId));
            handleClose();
        } else {
            return null;
        }
    };

    const handleRemove = async () => {
        await deleteProject();
        handleProjectFetch();
    };

    return (
        <>
            <button
                key="removeButton"
                className="hover:text-red-600 p-1  rounded-full w-9 h-9 flex items-center justify-center transition-all"
                onClick={handleOpen}
            >
                <DeleteIcon/>
            </button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                // sx={{borderRadius : 20}}
            >
                <div className="p-6">
                    <div id="alert-dialog-title">
                        <img
                            src="/icons/delete.svg"
                            alt=""
                            className="text-red-500 text-5xl mx-auto"
                        />
                    </div>
                    <DialogContent className="p-10">
                        <div
                            id="alert-dialog-description"
                            className="w-full p-0"
                        >
                            <h1 className="text-xl font-nunito">
                                Do you want to Delete the Project?
                            </h1>
                        </div>
                    </DialogContent>
                    <div className="space-x-12 w-full flex justify-center">
                        <button
                            onClick={handleRemove}
                            className="bg-skin-main btn-blue px-8 hover:skin-main"
                            autoFocus
                        >
                            Yes
                        </button>
                        <button
                            onClick={handleClose}
                            className="bg-zinc-200 btn-blue text-black hover:bg-zinc-200"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default RemoveProject;
