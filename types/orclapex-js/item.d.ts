
declare namespace apex.item {

  interface ItemObject {
    id: string;
    node: HTMLElement;

    addValue(pValue: string): void;

    disable(): void;

    displayValueFor(pValue: string): string;

    enable(): void;

    getValidity(): ValidityState;

    getValidationMessage(): string;

    getValue(): string | string[];

    hide(pHideRow?: boolean): void;

    isChanged(): boolean;

    isDisabled(): void;

    isEmpty(): boolean;

    setFocus(): void;

    setStyle(pPropertyName: string, pPropertyValue: string): void;

    setValue(pValue: string | string[], pDisplayValue?: string, pSuppressChangeEvent?: boolean): void;

    show(pShowRow?: boolean): void;
  }

}
