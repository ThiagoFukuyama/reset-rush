import { useGameOver } from "./context/GameOverContext";

export default function Test() {
    const { isGameOver } = useGameOver();

    return (
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            aperiam maiores cupiditate nesciunt blanditiis rerum fugit ullam ex
            ad ipsum harum ipsa minus. Optio aliquid iusto corporis unde beatae
            id atque amet nobis, similique, cumque dicta eligendi dolore sed?
            Cumque accusamus cupiditate blanditiis tempora necessitatibus,
            provident alias! Quisquam similique laudantium officiis consectetur
            dignissimos ipsam perferendis. Maxime ab asperiores aliquid nemo
            nobis, hic, soluta in eum obcaecati aliquam tenetur veritatis labore
            dolorum tempora. Hic, magni in incidunt explicabo optio, ullam,
            dignissimos fuga temporibus non dolor sapiente sed minus. Accusamus
            possimus itaque facere voluptatibus fugiat dolore a quos.
            Reprehenderit similique vitae adipisci. {isGameOver}
        </div>
    );
}
