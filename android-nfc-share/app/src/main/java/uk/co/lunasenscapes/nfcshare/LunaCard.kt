package uk.co.lunasenscapes.nfcshare

/**
 * Shared card identity — same URL/token pattern as the live web BusinessCard.
 */
object LunaCard {
    const val BASE_URL = "https://lunasen-scapes.co.uk/BusinessCard/"
    const val ORG = "LUNA SEN-Scapes"
    const val EMAIL = "info@lunasen-scapes.co.uk"
    const val PHONE = "+447375996207"
    const val WEBSITE = "https://lunasen-scapes.co.uk/"
    const val NOTE = "Gardens, playgrounds, driveways, fencing, patios and building works."

    enum class Mode(val key: String, val label: String) {
        TAP_N_SHARE("tap_n_share", "Tap n Share"),
        TAP_N_SAVE("tap_n_save", "Tap n Save"),
        TAP_N_SWAP("tap_n_swap", "Tap n Swap");

        companion object {
            fun fromKey(key: String?): Mode =
                entries.firstOrNull { it.key == key } ?: TAP_N_SHARE
        }
    }

    fun liveUrl(cardId: String, nfcToken: String, mode: Mode): String {
        return BASE_URL.trimEnd('/') + "/" +
            "?card=${cardId}&token=${nfcToken}&live=true&nfc=${mode.key}"
    }

    fun vcard(): String = """
        BEGIN:VCARD
        VERSION:3.0
        FN:$ORG
        ORG:$ORG
        TEL;TYPE=CELL:$PHONE
        EMAIL;TYPE=INTERNET:$EMAIL
        URL:$WEBSITE
        NOTE:$NOTE
        END:VCARD
    """.trimIndent().replace("\n", "\r\n")
}
