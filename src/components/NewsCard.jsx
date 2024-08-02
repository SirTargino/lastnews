import dayjs from 'dayjs';

export default function NewsCard({ author, title, url, publishedAt }) {
    const formattedDate = dayjs(publishedAt).format('DD/MM/YYYY HH:mm');

    return (
        <div className={"bg-white flex items-center flex-col justify-center text-center w-60 shadow-lg rounded m-4 p-8"}>
            <p className="text-sm text-gray-500">Fonte: {author}</p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
            <a
                href={url}
                className="inline-block bg-slate-800 text-white px-4 py-2 rounded hover:bg-slate-600 transition"
                target="_blank"
                rel="noopener noreferrer"
            >
                Acessar
            </a>
            <p className="text-xs text-gray-400 mt-2">Data: {formattedDate}</p>
        </div>
    );
}