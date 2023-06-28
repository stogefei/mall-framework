import { DirectiveOptions, VNode, VNodeDirective } from 'vue';
import BBMenuTreeItem from '../item';
import { IBMenuTreeItem } from '../index';
class Drag {
  /// 目标元素
  el: HTMLElement;
  /**
   * 当前Vue组件
   */

  context: BBMenuTreeItem;

  /**
   * 回调方法
   */

  cb: Function;
  /**
   * 当前tree item数据
   */

  item: IBMenuTreeItem;
  /**
   * 当前item数据的父节点
   */

  parent: IBMenuTreeItem;
  /**
   * 拖拽时候的样式
   */

  dragClass = 'bb-menu-tree-item--dragging';

  onDragstartBind = null;

  onDragoverBind = null;

  onDropBind = null;

  onDragendBind = null;

  onDragleaveBind = null;

  tmpExpand = false;

  constructor (el: HTMLElement, cb: Function, vnode?: VNode) {
    this.el = el;
    this.cb = cb;
    this.context = vnode.context as BBMenuTreeItem;
    this.item = this.context.item;
    this.parent = this.context.parent;
    this.onDragstartBind = this.onDragstart.bind(this);
    this.onDragoverBind = this.onDragover.bind(this);
    this.onDropBind = this.onDrop.bind(this);
    this.onDragendBind = this.onDragend.bind(this);
    this.onDragleaveBind = this.onDragleave.bind(this);

    this.init();
  }

  init () {
    this.el.setAttribute('draggable', 'true');
    this.el.addEventListener('dragstart', this.onDragstartBind, false);
    this.el.addEventListener('dragend', this.onDragendBind, false);
    this.el.addEventListener('dragover', this.onDragoverBind, false);
    this.el.addEventListener('dragleave', this.onDragleaveBind, false);
    this.el.addEventListener('drop', this.onDropBind, false);
  }

  onDragstart (e: DragEvent) {
    this.el.classList.add(this.dragClass);
    this.el.removeEventListener('dragover', this.onDragoverBind, false);
    this.el.removeEventListener('dragleave', this.onDragleaveBind, false);
    this.el.removeEventListener('drop', this.onDropBind, false);
    e.dataTransfer.dropEffect = 'move';
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('iKey', this.item.key);
    e.dataTransfer.setData('pKey', this.parent?.key || '');
    // 如果文件夹并且是展开的就收起当前文件夹，结束的时候在展开
    this.tmpExpand = this.context.expand;
    if (this.item.folder && this.context.expand) {
      this.context.onExpand();
    }
  }

  onDragover (e: DragEvent) {
    e.stopPropagation();
    e.preventDefault();

    const { height } = this.el.getBoundingClientRect();
    if (this.item.folder) {
      if (e.offsetY < height / 3) {
        this.el.classList.add('bb-menu-tree-drag-over-top');
        this.el.classList.remove(
          'bb-menu-tree-drag-over-bottom',
          'bb-menu-tree-drag-over',
        );
      } else if (e.offsetY > height / 3 && e.offsetY < height * 0.66) {
        this.el.classList.add('bb-menu-tree-drag-over');
        this.el.classList.remove(
          'bb-menu-tree-drag-over-bottom',
          'bb-menu-tree-drag-over-top',
        );
        if (!this.context.expand) {
          this.context.onOpen();
        }
      } else {
        this.el.classList.add('bb-menu-tree-drag-over-bottom');
        this.el.classList.remove(
          'bb-menu-tree-drag-over',
          'bb-menu-tree-drag-over-top',
        );
      }
    } else {
      if (e.offsetY < height / 2) {
        this.el.classList.add('bb-menu-tree-drag-over-top');
        this.el.classList.remove('bb-menu-tree-drag-over-bottom');
      } else {
        this.el.classList.add('bb-menu-tree-drag-over-bottom');
        this.el.classList.remove('bb-menu-tree-drag-over-top');
      }
    }
  }

  onDragleave () {
    this.el.classList.remove(
      'bb-menu-tree-drag-over',
      'bb-menu-tree-drag-over-bottom',
      'bb-menu-tree-drag-over-top',
    );
  }

  onDrop (e: DragEvent) {
    e.stopPropagation();
    e.preventDefault();
    this.el.classList.remove(
      'bb-menu-tree-drag-over',
      'bb-menu-tree-drag-over-bottom',
      'bb-menu-tree-drag-over-top',
    );
    const iKey = e.dataTransfer.getData('iKey');
    const pKey = e.dataTransfer.getData('pKey');

    if (iKey) {
      const { height } = this.el.getBoundingClientRect();
      const index = parseInt(this.el.parentElement.getAttribute('data-index'));
      let type: 'before' | 'after' | 'current';
      if (this.item.folder) {
        if (e.offsetY < height / 3) {
          type = 'before';
        } else if (e.offsetY > height / 3 && e.offsetY < height * 0.66) {
          type = 'current';
        } else {
          type = 'after';
        }
      } else {
        if (e.offsetY < height / 2) {
          type = 'before';
        } else {
          type = 'after';
        }
      }
      const data = {
        oParentKey: pKey || undefined,
        itemKey: iKey,
        parentKey: this.parent?.key,
        index: 1,
      };
      switch (type) {
        case 'before':
          data.index = index;
          break;
        case 'after':
          data.index = index + 1;
          break;
        case 'current':
          data.index = this.item.children?.length || 0;
          data.parentKey = this.item.key;
          break;
        default:
          break;
      }
      e.dataTransfer.clearData();
      this.cb(data);
    }
  }

  onDragend (e: DragEvent) {
    if (this.item.folder && this.tmpExpand) {
      this.context.onExpand();
    }
    this.el.classList.remove(this.dragClass);
    this.el.addEventListener('dragover', this.onDragoverBind, false);
    this.el.addEventListener('dragleave', this.onDragleaveBind, false);
    this.el.addEventListener('drop', this.onDropBind, false);
  }

  destroy () {
    this.el.removeAttribute('draggable');
    this.el.removeEventListener('dragstart', this.onDragstartBind, false);
    this.el.removeEventListener('dragover', this.onDragoverBind, false);
    this.el.removeEventListener('drop', this.onDropBind, false);
  }
}

/**
 * 通用拖拽指令
 */
const DragDirective: DirectiveOptions = {
  bind (el: HTMLElement, bind: VNodeDirective, vnode: VNode) {},
  inserted (el: HTMLElement, bind: VNodeDirective, vnode: VNode) {
    (el as any).__b_menu_tree_drag__ = new Drag(el, bind.value, vnode);
  },
  unbind (el: HTMLElement) {
    const darg = (el as any).__b_menu_tree_drag__ as Drag;
    darg.destroy();
  },
};
export {
  DragDirective,
};
