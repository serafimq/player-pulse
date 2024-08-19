interface PostCardProps {
    title: string,
    body: string,
}

export function PostCard({title, body}: PostCardProps) {
    return (
        <div>
        <h2>{title}</h2>
        <div>{body}</div>
        </div>
    )
}