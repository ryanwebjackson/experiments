Private Sub txtChooseKey_KeyUp(ByVal sender As Object, ByVal e As System.Windows.Forms.KeyEventArgs) Handles txtChooseKey.KeyUp
        'Keycode is the numeric value of the key, it is what the computer sees it as.(G is 71)
        Dim InputKeyCode As System.Windows.Forms.Keys = e.KeyCode
        'KeyValue is the english version of what the key is, (G is G)
        Dim InputKeyValue As System.Windows.Forms.Keys = e.KeyValue
        'Takes the key value and puts it in a text box's text property.
        txtCurrentKey.Text = InputKeyValue.ToString
End Sub