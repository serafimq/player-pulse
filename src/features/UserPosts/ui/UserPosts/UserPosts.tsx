import { PostCard } from "../../../../entities/Post";
import { useGetUserPosts } from "../../api/userPostsApi";


export function UserPosts() {
    const {data, isLoading} = useGetUserPosts({limit: 5});

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        data?.map(post => (
            <PostCard key={post.id} title={post.title} body={post.body} />
        ))
        
    )
}