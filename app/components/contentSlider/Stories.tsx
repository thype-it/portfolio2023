type Props = {
  data: Promise<Story>;
};

export default async function Stories({ data }: Props) {
  const story = await data;

  return <div>Stories</div>;
}
