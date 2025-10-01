// Установка состояния всех потомков (вниз по дереву, без рекурсии)
function setChildrenState(checkbox, checked) {
  const stack = [checkbox];
  while (stack.length) {
    const current = stack.pop();
    const interest = current.closest('.interest');
    const children = interest.querySelectorAll(':scope > .interests > .interest > label > .interest__check');
    children.forEach(child => {
      child.checked = checked;
      child.indeterminate = false;
      stack.push(child);
    });
  }
}

// Обновление состояния родителей (вверх по дереву, без рекурсии)
function updateParentState(checkbox) {
  let parentInterest = checkbox.closest('.interests')?.closest('.interest');
  while (parentInterest) {
    const parentCheckbox = parentInterest.querySelector(':scope > label > .interest__check');
    const childCheckboxes = parentInterest.querySelectorAll(':scope > .interests > .interest > label > .interest__check');
    const checkedCount = Array.from(childCheckboxes).filter(cb => cb.checked).length;
    const indeterminateCount = Array.from(childCheckboxes).filter(cb => cb.indeterminate).length;

    if (checkedCount === childCheckboxes.length && checkedCount !== 0) {
      parentCheckbox.checked = true;
      parentCheckbox.indeterminate = false;
    } else if (checkedCount === 0 && indeterminateCount === 0) {
      parentCheckbox.checked = false;
      parentCheckbox.indeterminate = false;
    } else {
      parentCheckbox.checked = false;
      parentCheckbox.indeterminate = true;
    }
    parentInterest = parentInterest.closest('.interests')?.closest('.interest');
  }
}

document.querySelectorAll('.interest__check').forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    setChildrenState(this, this.checked);
    updateParentState(this);
  });
});