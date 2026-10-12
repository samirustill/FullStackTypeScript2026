export type UserType = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

interface HomeProps {
label: string;
users?: UserType[];
}

export default function Home({ label, users }: HomeProps) {
return (
<>
 {label && <div>{label}</div>}
 {users?.map((user) => {
 return (
    <div
        key={user?.id}
        style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginBottom: "10px",
    }}
>
        <div>id: {user?.id}</div>
        <div>title: {user?.title}</div>
    </div>
 );
 })}
</>
 );
}
