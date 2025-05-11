function example(num) {
    let result;
    if (typeof num !== "number") {
        console.log("not a number");
    }
    else if (num % 2 === 0) {
        result = "짝입니다.";
        console.log(result);
    } else {
        result = "홀입니다.";
        console.log(result);
    }
};

example(5);
example("테스트");
example(6);
example(8);


