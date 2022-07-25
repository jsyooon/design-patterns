abstract class Visitor {
  abstract get(): Promise<number | undefined>;
}

export default Visitor;
