
export const validateFields = (name: string, description: string): string | null => {
    if (!name || !name.trim() || !description || !description.trim()) {
        return 'Os campos não podem estar em branco';
    }
    return null;
};

export const validateFieldsVideo = (name: string, description: string, duration: number): string | null => {
    if (!name || !name.trim() || !description || !description.trim() || !duration) {
        return 'Os campos não podem estar em branco';
    };

    return null;
};

// type VideoRequest = {
//     name: string;
//     description: string;
//     duration: number;
//     category_id: string;

// };
