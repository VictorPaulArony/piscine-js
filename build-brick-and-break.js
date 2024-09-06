export function build(n) {
    let body = document.body;
    let bricks = 1;
    let inter = setInterval(() => {
        if (bricks > n) {
            clearInterval(inter);
            return;
        }

        let brk = document.createElement("div");
        brk.setAttribute("id", "brick-" + bricks);
        if (bricks % 3 === 2) {
            brk.dataset.foundation = true;
        }
        body.appendChild(brk);
        bricks++;
    }, 100);
}

export function destroy(ids) {
    Object.values(ids).forEach((id) => {
        let brick = document.getElementById(id);
        if (brick) {
            if (brick.dataset.foundation) {
                brick.dataset.repaired = "in progress";
            } else {
                brick.dataset.repaired = "true";
            }
        }
    });
}

export function destroyOne() {
    let bricks = document.querySelectorAll('div');
    if (bricks.length > 0) {
        bricks[bricks.length - 1].remove();
    }
}
